self.addEventListener('install', (e) => {
  console.log('서비스 워커가 설치되었습니다.');
});

self.addEventListener('fetch', (e) => {
  // 오프라인 연결 캐시 처리 기본 이벤트
});