import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  type?: string;
  onChange: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const { className, value, onChange, type = 'text', ...otherProps } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.input, {}, [className])}>
      <input type={type} value={value} onChange={onChangeHandler} />
    </div>
  );
});
