import { useState } from 'react';

export function Playlist() {
    const [playlisty, setPlaylisty] = useState([
        { id: 1, name: 'Rock', category: 'Rock', views: 0, enabled: true },
        { id: 2, name: 'Pop', category: 'Pop', views: 0, enabled: true },
        { id: 3, name: 'Jazz', category: 'Jazz', views: 0, enabled: true }
    ]);

    const togglePlaylist = (id) => {
        setPlaylisty((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, enabled: !item.enabled } : item
            )
        );
    };

    const odtworz = (id) => {
        setPlaylisty((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, views: item.views + 1 } : item
            )
        );
    };

    const aktywne = playlisty.filter((item) => item.enabled);

    return (
        <div className="container">
            <h1>Playlista</h1>

            <div className="d-flex flex-column gap-3 mb-4">
                {playlisty.map((item) => (
                    <div key={item.id} className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id={`switch-${item.id}`}
                            checked={item.enabled}
                            onChange={() => togglePlaylist(item.id)}
                        />
                        <label className="form-check-label" htmlFor={`switch-${item.id}`}>
                            {item.name}
                        </label>
                    </div>
                ))}
            </div>

            <div className="d-flex flex-wrap">
                {aktywne.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded"
                        style={{
                            margin: '5px',
                            padding: '10px',
                            minWidth: '180px',
                            maxWidth: '220px',
                            backgroundColor: '#87bff8',
                        }}
                    >
                        <div className="fw-bold mb-2">{item.name}</div>
                        <h4>Odtwórzeń {item.views}</h4>

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => odtworz(item.id)}
                        >
                            Odtwórz
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}