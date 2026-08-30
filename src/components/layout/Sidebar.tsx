'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import {
  LayoutDashboard,
  Building2,
  Cpu,
  MapPin,
  FileText,
  FolderLock,
  CheckCircle2,
  Gift,
  Inbox,
  Calendar,
  BarChart3,
  HelpCircle,
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { currentPersona, application, queries } = useAppStore();

  const isEntrepreneur = currentPersona.role === 'ENTREPRENEUR';

  const entrepreneurLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/business-profile', label: 'Business Profile', icon: Building2, highlight: true },
    { href: '/intelligence', label: 'Approval Intelligence', icon: Cpu },
    { href: '/roadmap', label: 'My Roadmap', icon: MapPin },
    {
      href: `/application/${application.id}`,
      label: 'FSSAI Application',
      icon: FileText,
      badge: application.status !== 'DRAFT' ? application.status : undefined,
    },
    { href: '/vault', label: 'Document Vault', icon: FolderLock },
    { href: '/compliance', label: 'Compliance & Renewals', icon: CheckCircle2 },
    { href: '/incentives', label: 'Incentives & Schemes', icon: Gift },
  ];

  const officerLinks = [
    { href: '/government/dashboard', label: 'Officer Dashboard', icon: LayoutDashboard },
    {
      href: '/government/applications',
      label: 'Application Queue',
      icon: Inbox,
      badge: '1 New',
    },
    { href: `/government/applications/${application.id}`, label: 'Active Dossier Review', icon: FileText },
    { href: '/government/inspections', label: 'Inspection Desk', icon: Calendar },
    { href: '/government/queries', label: 'Query Manager', icon: HelpCircle },
    { href: '/government/analytics', label: 'Process Bottlenecks', icon: BarChart3 },
  ];

  const links = isEntrepreneur ? entrepreneurLinks : officerLinks;

  return (
    <aside
      style={{
        width: '240px',
        background: '#ffffff',
        borderRight: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
      }}
    >
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {isEntrepreneur ? 'Applicant Menu' : 'Scrutiny Officer Workspace'}
        </div>
      </div>

      <nav style={{ padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href || (link.href !== '/dashboard' && pathname.startsWith(link.href));

          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '9px 12px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: isActive ? '600' : '500',
                color: isActive ? '#1d4ed8' : '#334155',
                background: isActive ? '#eff6ff' : 'transparent',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Icon size={16} color={isActive ? '#1d4ed8' : '#64748b'} />
                <span>{link.label}</span>
              </div>
              {link.badge && (
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: '700',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: isActive ? '#dbeafe' : '#f1f5f9',
                    color: isActive ? '#1d4ed8' : '#475569',
                  }}
                >
                  {link.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Hero Badge at Bottom of Sidebar */}
      <div style={{ padding: '16px', margin: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
        <div style={{ fontSize: '11px', fontWeight: '600', color: '#475569' }}>
          {isEntrepreneur ? 'Demo Entity' : 'Jurisdiction'}
        </div>
        <div style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a', marginTop: '2px' }}>
          {isEntrepreneur ? 'FreshChain Cold Logistics' : 'Pune Industrial Zone'}
        </div>
        <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
          {isEntrepreneur ? 'MIDC Chakan (Cold Chain)' : 'FSSAI / MIDC Unit'}
        </div>
      </div>
    </aside>
  );
};
