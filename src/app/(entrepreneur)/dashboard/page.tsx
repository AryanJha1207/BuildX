'use client';

import React from 'react';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { KpiCard } from '@/components/ui/KpiCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import {
  Building2,
  FileCheck2,
  AlertCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  FileText,
} from 'lucide-react';

export default function EntrepreneurDashboardPage() {
  const { business, application, queries, inspection } = useAppStore();

  const openQueries = queries.filter((q) => q.status === 'OPEN');
  const needsAttention = openQueries.length > 0 || application.status === 'QUERY_RAISED';

  return (
    <div className="page-body">
      {/* Header Banner with Business Context */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="badge badge-blue">MAHARASHTRA SINGLE WINDOW</span>
            <span className="badge badge-green">PROFILE VERIFIED (92%)</span>
          </div>
          <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a' }}>
            {business.name}
          </h1>
          <div style={{ fontSize: '13px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
            <span><MapPin size={13} style={{ display: 'inline', verticalAlign: '-2px' }} /> {business.district}, {business.state} ({business.locationType})</span>
            <span>•</span>
            <span>{business.sector} &gt; {business.subSector}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Link href="/business-profile" className="btn btn-secondary">
            <Building2 size={14} /> Edit Business Profile
          </Link>
          <Link href="/intelligence" className="btn btn-primary">
            View Roadmap <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Approval Success Banner */}
      {application.status === 'APPROVED' && (
        <div
          style={{
            marginBottom: '20px',
            padding: '18px 24px',
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#15803d',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: '#14532d' }}>
                FSSAI CENTRAL LICENCE APPROVED
              </div>
              <div style={{ fontSize: '12px', color: '#166534', marginTop: '2px' }}>
                Prototype Clearance Reference: <strong>APR-MH-2026-00124</strong> • Granted by FSSAI Central Licensing Authority
              </div>
            </div>
          </div>

          <Link href={`/application/${application.id}`} className="btn btn-primary btn-sm">
            View Approved Dossier <ArrowRight size={12} />
          </Link>
        </div>
      )}

      {/* Upcoming Inspection Banner */}
      {application.status === 'INSPECTION_SCHEDULED' && inspection && (
        <div
          style={{
            marginBottom: '20px',
            padding: '16px 20px',
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#dbeafe',
                color: '#1d4ed8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Clock size={20} />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e3a8a' }}>
                UPCOMING SITE INSPECTION: {inspection.scheduledDate} at {inspection.scheduledTime}
              </div>
              <div style={{ fontSize: '12px', color: '#1d4ed8' }}>
                Joint site verification at {inspection.location} by Scrutiny Lead {inspection.officerName}.
              </div>
            </div>
          </div>

          <Link href={`/application/${application.id}`} className="btn btn-primary btn-sm">
            View Inspection Details <ArrowRight size={12} />
          </Link>
        </div>
      )}

      {/* Action Required Banner if Any */}
      {needsAttention && (
        <div
          style={{
            marginBottom: '20px',
            padding: '16px 20px',
            background: '#fffbeb',
            border: '1px solid #fde68a',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#fef3c7',
                color: '#b45309',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AlertCircle size={20} />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#92400e' }}>
                ACTION REQUIRED: Department Clarification Requested
              </div>
              <div style={{ fontSize: '12px', color: '#b45309' }}>
                {openQueries[0]?.title || 'Officer raised a query on your active application.'}
              </div>
            </div>
          </div>

          <Link href={`/query/${openQueries[0]?.id || 'latest'}`} className="btn btn-primary btn-sm">
            Respond to Query <ArrowRight size={12} />
          </Link>
        </div>
      )}

      {/* Top KPI Cards */}
      <div className="grid-4" style={{ marginBottom: '20px' }}>
        <KpiCard
          label="Approvals Identified"
          value="9"
          subtext="Derived from business profile"
          badgeText="Verified"
          badgeType="blue"
          icon={<FileCheck2 size={18} />}
        />
        <KpiCard
          label="Action Required"
          value={needsAttention ? '1' : '0'}
          subtext={needsAttention ? 'Query requiring response' : 'No pending blockers'}
          badgeText={needsAttention ? 'Attention' : 'Clear'}
          badgeType={needsAttention ? 'amber' : 'green'}
          icon={<AlertCircle size={18} />}
        />
        <KpiCard
          label="Applications"
          value="1"
          subtext="APP-MH-2026-00124 (FSSAI)"
          badgeText={application.status}
          badgeType="blue"
          icon={<FileText size={18} />}
        />
        <KpiCard
          label="Active Approvals"
          value={application.status === 'APPROVED' ? '1' : '0'}
          subtext={application.status === 'APPROVED' ? 'FSSAI Central Licence active' : 'Pre-construction phase'}
          badgeText={application.status === 'APPROVED' ? 'Active' : 'In Progress'}
          badgeType={application.status === 'APPROVED' ? 'green' : 'neutral'}
          icon={<ShieldCheck size={18} />}
        />
      </div>

      {/* Main Grid: Application Status & Roadmap Preview */}
      <div className="grid-2">
        {/* Active Application Card */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Active Hero Application</div>
              <div className="card-subtitle">{application.approvalName}</div>
            </div>
            <StatusBadge status={application.status} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
              <span style={{ color: '#64748b' }}>Application ID:</span>
              <span style={{ fontWeight: '600', color: '#0f172a' }}>{application.appNumber}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
              <span style={{ color: '#64748b' }}>Department:</span>
              <span style={{ fontWeight: '500', color: '#334155' }}>{application.department}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
              <span style={{ color: '#64748b' }}>SLA Target Timeline:</span>
              <span style={{ fontWeight: '600', color: '#15803d' }}>30 Days (Within SLA)</span>
            </div>

            {inspection && (
              <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '6px', fontSize: '12px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontWeight: '600', color: '#0f172a' }}>Site Inspection Status:</div>
                <div style={{ color: '#475569', marginTop: '2px' }}>
                  Scheduled: {inspection.scheduledDate} at {inspection.scheduledTime} (Outcome: {inspection.outcome})
                </div>
              </div>
            )}
          </div>

          <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end' }}>
            <Link href={`/application/${application.id}`} className="btn btn-outline-primary btn-sm">
              Open Application Dossier <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Roadmap Summary Preview */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Personalized Approval Roadmap</div>
              <div className="card-subtitle">Cold Storage (5,000 MT) at MIDC Chakan</div>
            </div>
            <Link href="/roadmap" className="btn btn-secondary btn-sm">
              View All 9
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', background: '#f8fafc', borderRadius: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="#15803d" />
                <span>1. MIDC Building Plan + Provisional Fire</span>
              </div>
              <span className="badge badge-neutral" style={{ fontSize: '10px' }}>PRE-REQUISITE</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', background: '#eff6ff', borderRadius: '4px', border: '1px solid #bfdbfe' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={15} color="#1d4ed8" />
                <span style={{ fontWeight: '600', color: '#1d4ed8' }}>2. FSSAI Central License (Active)</span>
              </div>
              <StatusBadge status={application.status} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', background: '#f8fafc', borderRadius: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '15px', height: '15px', borderRadius: '50%', border: '2px solid #94a3b8', display: 'inline-block' }} />
                <span style={{ color: '#64748b' }}>3. MPCB Consent to Establish</span>
              </div>
              <span className="badge badge-neutral" style={{ fontSize: '10px' }}>NOT STARTED</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', background: '#f8fafc', borderRadius: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '15px', height: '15px', borderRadius: '50%', border: '2px solid #94a3b8', display: 'inline-block' }} />
                <span style={{ color: '#64748b' }}>4. MSEDCL Industrial HT Power (750 kW)</span>
              </div>
              <span className="badge badge-neutral" style={{ fontSize: '10px' }}>NOT STARTED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
