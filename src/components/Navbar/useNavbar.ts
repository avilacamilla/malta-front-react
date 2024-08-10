import { useState, useEffect, useCallback } from 'react';

interface UseNavbarProps {
  offset?: number;
}

export function useNavbar({ offset = 50 }: UseNavbarProps = {}) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > offset);
  }, [offset]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const setActive = (item: string) => {
    setActiveItem(item);
  };

  const toggleDropdown = (dropdown: string) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    isVisible,
    isScrolled,
    activeItem,
    dropdownOpen,
    toggleVisibility,
    setActive,
    toggleDropdown,
  };
}