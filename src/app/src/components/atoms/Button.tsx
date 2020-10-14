import React, { FC } from 'react';
import Button from '@material-ui/core/Button';

export type Props = {
  handleClick: () => void;
};

const MyButton: FC<Props> = ({ handleClick, children }) => {
  return <Button onClick={() => handleClick()}>{children}</Button>;
};

export default MyButton;
