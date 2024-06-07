import React from 'react';
import GlobalStyle from '../GlobalStyle';
const HeaderStyles = {
  width: '100%',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  color: 'black',
  fontWeight: '600',
  borderRadius: '5px 5px 5px 5px',
  justifyContent: 'center',

};
const FooterStyles = {
  width: '100%',
  height: '50px',
  display: 'flex',
  background: 'black',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '6px',
};

const layoutStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    minHeight: '90vh',
}

function Header() {
  return (
    <div style={{ ...HeaderStyles }}>
      <span>✏️ Simple memo</span>
    </div>
  );
}

const MoveToTop = () => { // 위로 올라가기 함수
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function Footer() {
return (
    <div style={{ ...FooterStyles }}>
        <div onClick={MoveToTop} className='text-medium font-bold underline'>맨위로 올라가기</div>
    </div>
);
}


function Layout({ children }) {
return (
    <div style={{ border: '1px solid black', borderRadius: '10px', padding: "10px"}}>
        <GlobalStyle />
        <Header />
        <div style={{ ...layoutStyles }}>
            {children}
        </div>
        <Footer />
    </div>
);
}

export default Layout;