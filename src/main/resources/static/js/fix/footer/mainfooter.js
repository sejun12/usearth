let currentActiveIcon = null;

const svgIcons = document.querySelectorAll('.cIcon');

// 각 SVG 요소에 클릭 이벤트 리스너 추가
svgIcons.forEach((svgIcon) => {
    svgIcon.addEventListener('click', () => {
        // 이전 활성화된 아이콘의 색상을 원래대로 복원
        if (currentActiveIcon) {
            currentActiveIcon.style.fill = 'rgb(148, 155, 160)';

            // 연결된 <div>의 색상도 원래대로 복원
            const relatedDiv = currentActiveIcon.closest('.bottomNavBtn');
            if (relatedDiv) {
                const caption2 = relatedDiv.querySelector('.caption2');
                if (caption2) {
                    caption2.style.color = 'rgb(118, 125, 130)';
                }
            }
        }

        // 현재 클릭한 아이콘의 색상 변경
        svgIcon.style.fill = 'rgb(42, 125, 225)';

        // 연결된 <div> 요소 찾기
        const relatedDiv = svgIcon.closest('.bottomNavBtn');

        if (relatedDiv) {
            // 연결된 <div>의 텍스트 색상 변경
            const caption2 = relatedDiv.querySelector('.caption2');
            if (caption2) {
                caption2.style.color = 'rgb(42, 125, 225)';
            }
        }

        // 현재 클릭한 아이콘을 현재 활성화된 아이콘으로 설정
        currentActiveIcon = svgIcon;
    });
});