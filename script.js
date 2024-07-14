// O JSON de exemplo como string
const jsonData = `{
    "content": [
        {
            "id": "71976e39",
            "settings": {
                "flex_direction": "column",
                "min_height": {"unit": "px", "size": 550, "sizes": []},
                "flex_justify_content": "center",
                "background_overlay_background": "classic",
                "background_overlay_image": {
                    "url": "https://cahnut.com/wp-content/uploads/2024/03/Banner-1-4.png",
                    "id": 167,
                    "size": "",
                    "alt": "",
                    "source": "library"
                }
            },
            "elements": [
                {
                    "id": "626a72d4",
                    "settings": {
                        "flex_direction": "row",
                        "flex_gap": {"column": "0", "row": "0", "isLinked": false, "unit": "px", "size": 0},
                        "padding": {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0", "isLinked": false}
                    },
                    "elements": [
                        {
                            "id": "f61d8fc",
                            "settings": {
                                "flex_gap": {"column": "5", "row": "5", "isLinked": true, "unit": "px", "size": 5}
                            },
                            "elements": [
                                {
                                    "id": "1e622281",
                                    "settings": {
                                        "image": {"url": "https://classmagno.com/caps/wp-content/uploads/2024/03/Banner-1-Cel.png", "id": 370, "size": "", "alt": "", "source": "library"}
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}`;

// Converter a string JSON para objeto JavaScript
const data = JSON.parse(jsonData);

// Função para renderizar o conteúdo na página
function renderContent(content) {
    const container = document.getElementById('content');
    content.forEach(item => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.flexDirection = item.settings.flex_direction;
        div.style.minHeight = `${item.settings.min_height.size}${item.settings.min_height.unit}`;
        div.style.justifyContent = item.settings.flex_justify_content;
        div.style.backgroundImage = `url(${item.settings.background_overlay_image.url})`;
        div.style.padding = `${item.settings.padding.top}px ${item.settings.padding.right}px ${item.settings.padding.bottom}px ${item.settings.padding.left}px`;
        container.appendChild(div);
    });
}

// Chamar a função para renderizar o conteúdo
renderContent(data.content);