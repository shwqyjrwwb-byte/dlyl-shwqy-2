'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/components/ui/use-mobile';

export function UnifiedNavigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);
    }
  }, [isMobile]);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => setMobileMenuOpen(false);
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const mainNavItems = [
    { label: 'الرئيسية', href: '/' },
    {
      label: 'عن الشركة',
      href: '#',
      submenu: [
        { label: 'نبذة عنا', href: '/' },
        { label: 'الموظفين', href: '/job-descriptions' },
        { label: 'الشركاء', href: '/' },
      ],
    },
    {
      label: 'المشاريع',
      href: '#',
      submenu: [
        { label: 'المناطق', href: '/areas' },
        { label: 'العملاء', href: '/contacts' },
        { label: 'المراحل', href: '/phases' },
      ],
    },
    {
      label: 'الخدمات',
      href: '#',
      submenu: [
        { label: 'الحزم', href: '/packages' },
        { label: 'المواصفات', href: '/specifications' },
        { label: 'التعديلات', href: '/modifications' },
      ],
    },
    {
      label: 'الإدارة',
      href: '#',
      submenu: [
        { label: 'جودة التنفيذ', href: '/quality' },
        { label: 'الغرامات', href: '/penalties' },
        { label: 'الدفعات', href: '/payment' },
        { label: 'المقاولون', href: '/contractors' },
        { label: 'المركبات', href: '/vehicles' },
      ],
    },
    { label: 'المكتب الفني', href: '/technical-office' },
  ];

  const toggleMobileDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-0">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">ش</span>
              </div>
              <span className="text-primary font-bold text-lg">شوقي جروب</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.submenu ? (
                    <button
                      className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-1"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown size={16} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-1"
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Desktop Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute right-0 mt-0 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-foreground p-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="فتح القائمة"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-16 right-0 w-80 max-w-[90vw] h-[calc(100vh-4rem)] bg-card border-l border-border z-50 transform transition-transform duration-300 lg:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="overflow-y-auto h-full p-4">
          {mainNavItems.map((item) => (
            <div key={item.label} className="mb-2">
              {item.submenu ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-foreground hover:bg-accent rounded-md transition-colors"
                    onClick={() => toggleMobileDropdown(item.label)}
                  >
                    <span className="font-medium">{item.label}</span>
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="mt-2 mr-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-foreground hover:bg-accent rounded-md transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
