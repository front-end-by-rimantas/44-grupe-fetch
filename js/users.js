export function renderUsersList(data) {
    const ulDOM = document.querySelector('ul');
    let HTML = '';

    for (const user of data) {
        HTML += `<li>
                    <div>${user.name}</div>
                    <div>${user.age}</div>
                    <div>${user.isMarried}</div>
                </li>`;
    }

    ulDOM.innerHTML = HTML;
}
