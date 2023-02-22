import { useState } from 'react';
import styles from '@styles/Sidebar.module.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={`${styles.sidebar} ${(isOpen ? styles.open : '')}`}>
        사이드바 메뉴
      </div>
      <button onClick={handleToggleSidebar}>Toggle Sidebar</button>
    </>
  );
};

export default Sidebar;
