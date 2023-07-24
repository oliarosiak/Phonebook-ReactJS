import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: baseline;
  color: var(--header-text-color);
`;

export const UserMenuText = styled.p`
  margin-right: 16px;
`;

export const UserMenuButton = styled.button`
  color: inherit;
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
