export interface SidebarItem {
  to: string;
  label: string;
}

export interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}
