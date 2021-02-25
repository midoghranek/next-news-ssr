import { colors } from "config";

const Header = () => {
  return (
    <header>
      <div className="inner">
        <div className="logo">
          <h1>NewsBuzz</h1>
        </div>
        <div className="buttons">
          <button>LOGIN</button>
          <button>REGISTER</button>
        </div>
      </div>
      <style jsx>{`
        .inner {
          max-width: 1140px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        header {
          height: 60px;
          background: ${colors.primary};
          color: #fff;
        }
        header h1 {
          margin: 0;
          line-height: 60px;
          font-size: 22px;
        }
        .buttons {
        }
        .buttons button {
          font-size: 12px;
          border: 1px solid #fff;
          background: none;
          padding: 10px 20px;
          border-radius: 50px;
          color: #fff;
          margin-left: 10px;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
};

export default Header;
