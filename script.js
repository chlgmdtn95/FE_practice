"use strict";
function createBoxes(count) {
    const container = document.getElementById('box-container');
    if (!container)
        return;
    for (let i = 0; i < count; i++) {
        const win_lose_box = document.createElement('div');
        win_lose_box.className = 'col-span-12 pl-2 h-32 bg-red-800 m-2 rounded-xl';
        const box = document.createElement('div');
        box.className = 'w-full h-32 bg-white rounded-xl';
		win_lose_box.append(box)
        container.appendChild(win_lose_box);
    }
}
// 예시로 5개의 상자를 생성
createBoxes(5);