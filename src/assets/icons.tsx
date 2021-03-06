import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
}

export const VaultIcon: React.FC<IconProps> = ({
  size = 18,
  color = '#7f8fa4'
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    fill={color}
  >
    <defs />
    <path d="M145 512H65c-8.284 0-15-6.716-15-15v-17h110v17c0 8.284-6.716 15-15 15zM447 512h-80c-8.284 0-15-6.716-15-15v-17h110v17c0 8.284-6.716 15-15 15zM225 180c-24.813 0-45 20.187-45 45s20.187 45 45 45 45-20.187 45-45-20.187-45-45-45zm0 60c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zM0 210h60v30H0zM0 270h60v50H0z" />
    <path d="M422 90H90v270h332zM225 300c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm167-45c0 8.284-6.716 15-15 15s-15-6.716-15-15v-60c0-8.284 6.716-15 15-15s15 6.716 15 15z" />
    <path d="M497 0H15C6.716 0 0 6.716 0 15v85h60V75c0-8.284 6.716-15 15-15h362c8.284 0 15 6.716 15 15v300c0 8.284-6.716 15-15 15H75c-8.284 0-15-6.716-15-15v-25H0v85c0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z" />
    <path d="M0 130h60v50H0z" />
  </svg>
);
