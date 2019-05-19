import styled, { css } from 'styled-components';

import { TOOLBAR_BUTTON_WIDTH, TOOLBAR_HEIGHT } from '~/renderer/constants';
import { centerIcon } from '~/renderer/mixins';

export const Icon = styled.div`
  width: 100%;
  height: 100%;
  will-change: background-image;
  transition: 0.15s background-image;

  ${({
    size,
    disabled,
    opacity,
  }: {
    size: number;
    disabled: boolean;
    opacity: number;
  }) => css`
    ${centerIcon(size)};
    opacity: ${disabled ? 0.25 : opacity};
  `};
`;

export const Button = styled.div`
  height: ${TOOLBAR_HEIGHT}px;
  -webkit-app-region: no-drag;
  position: relative;
  transition: 0.2s background-color;
  width: ${TOOLBAR_BUTTON_WIDTH}px;

  ${({ disabled }: { disabled: boolean }) => css`
    pointer-events: ${disabled ? 'none' : 'auto'};
  `};
`;

export const Circle = styled.div`
  border-radius: 50%;
  width: 28px;
  height: 28px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  transition: 0.2s background-color;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
