import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app_container">
      <div className="app_links">
        <div>
          <Link
            to="/schedule"
            style={{
              textDecoration: 'none',
              fontWeight: 'bolder',
              color: '#000000',
            }}
          >
            병원 예약 가능 목록
          </Link>
        </div>
        <div>
          <Link
            to="/register"
            style={{
              textDecoration: 'none',
              fontWeight: 'bolder',
              color: '#000000',
            }}
          >
            병원 예약 등록
          </Link>
        </div>
        <div>
          <Link
            to="/reservation"
            style={{
              textDecoration: 'none',
              fontWeight: 'bolder',
              color: '#000000',
            }}
          >
            병원 예약 내역 조회
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
