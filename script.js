function showContent(element, content, imageUrl) {
    // Егер ұяшық бұған дейін басылған болса, функцияны тоқтату
    if (element.classList.contains("disabled")) return;

    // Жаңа бет ашу және контентті ортасына орналастыру
    const newWindow = window.open("", "_blank", "width=400,height=300");
    newWindow.document.write(`
        <style>
            body { display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; margin: 0; font-size: 24px; font-family: Arial, sans-serif; }
            img { max-width: 100%; height: auto; margin-top: 20px; }
        </style>
        <h1>${content}</h1>
        <img src="${imageUrl}" alt="${content}">
    `);

    // Ұяшықтың түсін өзгертіп, басылмастай ету
    element.classList.add("disabled");
}
