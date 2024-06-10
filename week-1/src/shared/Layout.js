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
      <span>✏️ Algorithm review optimizer</span>
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
        {/* <Footer /> */}
    </div>
);
}

export default Layout;