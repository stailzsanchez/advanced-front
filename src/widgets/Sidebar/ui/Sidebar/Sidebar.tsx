import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { ButtonSize } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const { className } = props;
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        className={cls.collapseBtn}
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
          to={RoutePath.main}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('Главная')}</span>
        </AppLink>

        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
          to={RoutePath.about}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('О сайте')}</span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
