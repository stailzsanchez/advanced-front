import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        placeholder={t('Введите username')}
        className={cls.input}
        type="text"
        autoFocus
      />
      <Input
        placeholder={t('Введите пароль')}
        className={cls.input}
        type="text"
      />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};