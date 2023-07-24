import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: baseline;
  color: var(--header-text-color);
  padding: 0;
`;

export const UserMenuText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const UserMenuButton = styled.button`
  color: inherit;
  margin-left: 16px;
  padding: 4px 12px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 4px;
  background-color: var(--bcg-color);
  border: 2px solid var(--header-accent-color);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px var(--header-color);
    outline: 1px solid var(--header-color);
    color: var(--accent-color);
  }
`;
