'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { evaluateApprovalRules, ApprovalRuleResult } from '@/lib/rule-engine';
import { StatusBadge } from '@/components/ui/StatusBadge';
import {
  MapPin,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  ArrowRight,
  ShieldCheck,
  Building2,
  FolderOpen,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export default function PersonalizedRoadmapPage() {
  const { business, application, queries, inspection } = useAppStore();
  const [expandedId, setExpandedId] = useState<string | null>('rule-cs-02'); // FSSAI expanded by default

  const evaluation = evaluateApprovalRules(business);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getDynamicStatus = (rule: ApprovalRuleResult) => {
    if (rule.code === 'FSSAI_CENTRAL_LICENSE') {
      return application.status;
    }
    if (rule.code === 'MIDC_BUILDING_FIRE') {
      return 'PRE_REQUISITE';
    }
    return rule.status;
  };

  const stages = [
    {
      id: 'PLANNING',
      title: 'Stage 1: Pre-Construction & Planning Clearances',
      subtitle: 'Approvals required prior to site development and civil construction works',
      rules: evaluation.results.filter((r) => r.stage === 'PLANNING'),
    },
    {
      id: 'UTILITIES',
      title: 'Stage 2: Infrastructure & Utility Sanctions',
      subtitle: 'Sanctions for power distribution, water works, and drainage infrastructure',
      rules: evaluation.results.filter((r) => r.stage === 'UTILITIES'),
    },
    {
      id: 'PRE_COMMISSIONING',
      title: 'Stage 3: Pre-Commissioning & Operational Licenses',
      subtitle: 'Final safety certifications, labor approvals, and occupancy clearances before commencing operations',
      rules: evaluation.results.filter((r) => r.stage === 'PRE_COMMISSIONING'),
    },
  ];

  return (
    <div className="page-body">
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="badge badge-blue">PERSONALIZED ROADMAP</span>
            <span className="badge badge-green">9 CLEARANCES ORDERED & SYNCHRONIZED</span>
          </div>
          <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a' }}>
            Approval Journey Roadmap
          </h1>
          <div style={{ fontSize: '13px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
            <span><strong>{business.name}</strong></span>
            <span>•</span>
            <span><MapPin size={12} style={{ display: 'inline', verticalAlign: '-1px' }} /> {business.district}, {business.state} ({business.locationType} Chakan)</span>
            <span>•</span>
            <span>{business.subSector} (5,000 MT)</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Link href="/intelligence" className="btn btn-secondary">
            View Rule Analysis
          </Link>
          <Link href={`/application/${application.id}`} className="btn btn-primary">
            Open FSSAI Application <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Hero Active Application Tracker Banner */}
      <div
        style={{
          background: application.status === 'APPROVED' ? '#f0fdf4' : '#eff6ff',
          border: `1px solid ${application.status === 'APPROVED' ? '#bbf7d0' : '#bfdbfe'}`,
          borderRadius: '8px',
          padding: '16px 20px',
          marginBottom: '24px',
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
              borderRadius: '8px',
              background: application.status === 'APPROVED' ? '#15803d' : '#1d4ed8',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {application.status === 'APPROVED' ? <CheckCircle2 size={24} /> : <FileText size={24} />}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>
                Hero Clearance Focus: FSSAI Central Licence ({application.appNumber})
              </span>
              <StatusBadge status={application.status} />
            </div>
            <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
              {application.status === 'APPROVED'
                ? 'Application approved by FSSAI Designated Officer! License active and compliant.'
                : application.status === 'QUERY_RAISED'
                ? 'Action Required: Scrutiny officer raised a clarification query.'
                : application.status === 'UNDER_REVIEW'
                ? 'Under active scrutiny by Designated Officer (Western Region Cell).'
                : 'Application prepared with verified Business Profile parameters and ready in Document Vault.'}
            </div>
          </div>
        </div>

        <Link href={`/application/${application.id}`} className="btn btn-primary btn-sm">
          {application.status === 'APPROVED' ? 'View Approved Dossier' : 'Manage Application'} <ArrowRight size={12} />
        </Link>
      </div>

      {/* Roadmap Sequence Grouped by Stages */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {stages.map((stageSection, sIndex) => (
          <div key={stageSection.id}>
            {/* Stage Header */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '12px' }}>
              <h2 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>
                {stageSection.title}
              </h2>
              <span style={{ fontSize: '12px', color: '#64748b' }}>— {stageSection.subtitle}</span>
            </div>

            {/* Stage Step Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {stageSection.rules.map((rule) => {
                const dynamicStatus = getDynamicStatus(rule);
                const isHero = rule.code === 'FSSAI_CENTRAL_LICENSE';
                const isExpanded = expandedId === rule.id;
                const isApproved = isHero && application.status === 'APPROVED';

                return (
                  <div
                    key={rule.id}
                    className="card"
                    style={{
                      borderLeft: isApproved
                        ? '4px solid #15803d'
                        : isHero
                        ? '4px solid #1d4ed8'
                        : '1px solid #e2e8f0',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {/* Step Card Summary Row */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                      onClick={() => toggleExpand(rule.id)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: isApproved ? '#f0fdf4' : isHero ? '#eff6ff' : '#f8fafc',
                            color: isApproved ? '#15803d' : isHero ? '#1d4ed8' : '#64748b',
                            border: `1px solid ${isApproved ? '#bbf7d0' : isHero ? '#bfdbfe' : '#e2e8f0'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '700',
                            fontSize: '13px',
                          }}
                        >
                          {isApproved ? <CheckCircle2 size={16} color="#15803d" /> : rule.sequenceOrder}
                        </div>

                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>
                              {rule.name}
                            </span>
                            {isHero && (
                              <span className="badge badge-blue" style={{ fontSize: '10px' }}>
                                HERO PROTOTYPE
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: '12px', color: '#64748b', marginTop: '1px' }}>
                            {rule.authorityName} ({rule.department})
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <StatusBadge status={dynamicStatus} />
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          style={{ padding: '4px 8px', fontSize: '11px' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(rule.id);
                          }}
                        >
                          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Step Detail Box */}
                    {isExpanded && (
                      <div
                        style={{
                          marginTop: '14px',
                          paddingTop: '14px',
                          borderTop: '1px solid #f1f5f9',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                          fontSize: '13px',
                        }}
                      >
                        <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                          <div style={{ fontSize: '11px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', marginBottom: '3px' }}>
                            Regulatory Applicability Rationale:
                          </div>
                          <div style={{ color: '#1e293b', lineHeight: '1.5' }}>
                            {rule.reason}
                          </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', fontSize: '12px' }}>
                          <div>
                            <span style={{ color: '#64748b' }}>Required Vault Documents:</span>
                            <div style={{ fontWeight: '600', color: '#0f172a', marginTop: '2px' }}>
                              {rule.mandatoryDocuments.join(' • ')}
                            </div>
                          </div>
                          <div>
                            <span style={{ color: '#64748b' }}>Statutory Reference:</span>
                            <div style={{ color: '#334155', fontStyle: 'italic', marginTop: '2px' }}>
                              {rule.legalBasis}
                            </div>
                          </div>
                        </div>

                        {/* Step CTAs */}
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '6px', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                          {isHero ? (
                            <Link href={`/application/${application.id}`} className="btn btn-primary btn-sm">
                              {application.status === 'APPROVED' ? 'View Approved Dossier' : 'Open Application Builder'} <ArrowRight size={12} />
                            </Link>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              disabled
                              title="Configured controlled roadmap item"
                            >
                              Configured Requirement (Simulated)
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '28px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
        <Link href="/intelligence" className="btn btn-secondary">
          ← Back to Approval Intelligence
        </Link>
        <Link href={`/application/${application.id}`} className="btn btn-primary" style={{ padding: '10px 24px' }}>
          Proceed to FSSAI Application Builder <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
