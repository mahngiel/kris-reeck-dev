import React from 'react';
import {
  FaAws, FaGoogle, FaDocker, FaGitlab, FaGithub, FaJenkins, FaPython, FaNodeJs, FaPhp, FaDatabase, FaShieldAlt, FaServer, FaCode, FaChartLine, FaCogs, FaCloud, FaLock, FaUsers, FaGlobe,
  FaJava, FaRobot
} from 'react-icons/fa';
import {
  SiTerraform, SiKubernetes, SiPrometheus, SiGrafana, SiDatadog, SiRedis, SiMongodb, SiMysql, SiCloudflare,
  SiUnity, SiProxmox, SiElasticstack, SiCircleci, SiApachegroovy, SiJavascript, SiTypescript, SiOpentelemetry,
  SiElasticsearch, SiVmware, SiLinux, SiNginx, SiApache, SiLaravel, SiDjango, SiSpring, SiNextdotjs, SiReact,
  SiGithubcopilot, SiOpenai
} from 'react-icons/si';
import {
  TbBrandGolang, TbCloudComputing, TbDatabaseCog
} from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';

// Define skills with categories for dynamic activation/deactivation
const skillCategories = {
  cloudPlatforms: [
    { name: 'AWS', icon: FaAws, active: true },
    { name: 'Google Cloud', icon: FaGoogle, active: true },
    { name: 'Azure', icon: VscAzure, active: true },
  ],
  devopsTools: [
    { name: 'Terraform', icon: SiTerraform, active: true },
    { name: 'CloudFormation', icon: SiElasticstack, active: true },
    { name: 'Jenkins', icon: FaJenkins, active: true },
    { name: 'GitHub Actions', icon: FaGithub, active: true },
    { name: 'GitLab CI', icon: FaGitlab, active: true },
    { name: 'CircleCI', icon: SiCircleci, active: true },
  ],
  containers: [
    { name: 'Docker', icon: FaDocker, active: true },
    { name: 'ECS', icon: FaServer, active: true },
    { name: 'Kubernetes', icon: SiKubernetes, active: true },
  ],
  monitoring: [
    { name: 'Datadog', icon: SiDatadog, active: true },
    { name: 'Grafana', icon: SiGrafana, active: true },
    { name: 'OpenTelemetry', icon: SiOpentelemetry, active: true },
    { name: 'Elasticsearch', icon: SiElasticsearch, active: true },
    { name: 'Prometheus', icon: SiPrometheus, active: true },
    { name: 'CloudWatch', icon: FaChartLine, active: true },
  ],
  programming: [
    { name: 'Golang', icon: TbBrandGolang, active: true },
    { name: 'Python', icon: FaPython, active: true },
    { name: 'Node.js', icon: FaNodeJs, active: true },
    { name: 'PHP', icon: FaPhp, active: true },
    { name: 'Java', icon: FaJava, active: true },
    { name: 'Groovy', icon: SiApachegroovy, active: true },
    { name: 'JavaScript', icon: SiJavascript, active: true },
    { name: 'TypeScript', icon: SiTypescript, active: true },
  ],
  databases: [
    { name: 'MySQL', icon: SiMysql, active: true },
    { name: 'Redis', icon: SiRedis, active: true },
    { name: 'BigQuery', icon: TbDatabaseCog, active: true },
    { name: 'PostgreSQL', icon: FaDatabase, active: true },
    { name: 'MongoDB', icon: SiMongodb, active: true },
  ],
  security: [
    { name: 'SOC 2', icon: FaShieldAlt, active: true },
    { name: 'SOX', icon: FaLock, active: true },
    { name: 'EDR', icon: FaLock, active: true },
    { name: 'SCIM', icon: FaUsers, active: true },
    { name: 'IAM', icon: FaUsers, active: true },
    { name: 'WAF', icon: SiCloudflare, active: true },
  ],
  ai: [
    { name: 'GitHub Copilot', icon: SiGithubcopilot, active: true },
    { name: 'Prompt Engineering', icon: FaCode, active: true },
    { name: 'LLM Integration', icon: FaCogs, active: true },
    { name: 'MCP Servers', icon: FaServer, active: true },
    { name: 'AI Agents', icon: SiOpenai, active: true },
  ],
  iot: [
    { name: 'IoT Platforms', icon: FaGlobe, active: true },
    { name: 'Edge Computing', icon: FaServer, active: true },
    { name: 'Device Management', icon: FaCogs, active: true },
    { name: 'Medical Devices', icon: FaShieldAlt, active: true },
    { name: 'Proxmox', icon: SiProxmox, active: true },
  ],
  other: [
    { name: 'Unity', icon: SiUnity, active: true },
  ]
};

export default function RightColumn() {
  return (
    <nav className="bg-paper col-span-1 space-y-4">
      <div className="bg-paper rounded">
        <h2 className="text-xl font-bold text-primary mb-4">Technical Skills</h2>

        {/* Cloud Platforms */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-primary border-l-4 border-primary px-3 py-2 rounded">Cloud Platforms</h3>
          <div className="space-y-1">
            {skillCategories.cloudPlatforms.map(({ name, icon: Icon, active }) => (
              <div key={name} className="flex w-full bg-gray-800 bg-opacity-60 transition-all duration-200">
                <div className="flex bg-primary p-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex p-2">
                  <span className="font-medium">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IoT & Hardware */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-blue-400 border-l-4 border-blue-500 px-3 py-2 rounded">IoT & Edge Hardware</h3>
          <div className="space-y-1">
            {skillCategories.iot.map(({ name, icon: Icon, active }) => (
              <div key={name} className="flex w-full bg-gray-800 bg-opacity-60 transition-all duration-200">
                <div className="flex bg-blue-500 p-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex p-2">
                  <span className="font-medium">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps Tools */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-green-400 border-l-4 border-green-500 px-3 py-2 rounded">DevOps & CI/CD</h3>
          <div className="space-y-1">
            {skillCategories.devopsTools.map(({ name, icon: Icon, active }) => (
              <div key={name} className="flex w-full bg-gray-800 bg-opacity-60 transition-all duration-200">
                <div className="flex bg-green-500 p-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex p-2">
                  <span className="font-medium">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI & Development Tools */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-pink-400 border-l-4 border-pink-500 px-3 py-2 rounded">AI & Development</h3>
          <div className="space-y-1">
            {skillCategories.ai.map(({ name, icon: Icon, active }) => (
              <div key={name} className="flex w-full bg-gray-800 bg-opacity-60 transition-all duration-200">
                <div className="flex bg-pink-500 p-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex p-2">
                  <span className="font-medium">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Containers */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-cyan-400 border-l-4 border-cyan-500 px-3 py-2 rounded">Containers</h3>
          <div className="space-y-1">
            {skillCategories.containers.map(({ name, icon: Icon, active }) => (
              <div key={name} className="flex w-full bg-gray-800 bg-opacity-60 transition-all duration-200">
                <div className="flex bg-cyan-500 p-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex p-2">
                  <span className="font-medium">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monitoring */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-orange-400 border-l-4 border-orange-500 px-3 py-2 rounded">Monitoring</h3>
          <div className="space-y-1">
            {skillCategories.monitoring.map(({ name, icon: Icon, active }) => (
              <div key={name} className="flex w-full bg-gray-800 bg-opacity-60 transition-all duration-200">
                <div className="flex bg-orange-500 p-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex p-2">
                  <span className="font-medium">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-purple-400 border-l-4 border-purple-500 px-3 py-2 rounded">Programming</h3>
          <div className="space-y-1">
            {skillCategories.programming.map(({ name, icon: Icon, active }) => (
              <div key={name} className="flex w-full bg-gray-800 bg-opacity-60 transition-all duration-200">
                <div className="flex bg-purple-500 p-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex p-2">
                  <span className="font-medium">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-yellow-400 border-l-4 border-yellow-500 px-3 py-2 rounded">Databases</h3>
          <div className="space-y-1">
            {skillCategories.databases.map(({ name, icon: Icon, active }) => (
              <div key={name} className="flex w-full bg-gray-800 bg-opacity-60 transition-all duration-200">
                <div className="flex bg-yellow-500 p-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex p-2">
                  <span className="font-medium">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-red-400 border-l-4 border-red-500 px-3 py-2 rounded">Security</h3>
          <div className="space-y-1">
            {skillCategories.security.map(({ name, icon: Icon, active }) => (
              <div key={name} className="flex w-full bg-gray-800 bg-opacity-60 transition-all duration-200">
                <div className="flex bg-red-500 p-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex p-2">
                  <span className="font-medium">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
