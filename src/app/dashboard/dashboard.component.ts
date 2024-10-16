import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  keyMetrics = [
    { name: 'Organic Traffic', value: '15,234', change: '+5%' },
    { name: 'Keyword Rankings', value: '342', change: '+12' },
    { name: 'Backlinks', value: '1,567', change: '+23' },
    { name: 'Page Speed Score', value: '89', change: '+2' }
  ];

  recentActivities = [
    { action: 'New backlink detected', date: '2023-06-15', details: 'From example.com' },
    { action: 'Keyword ranking improved', date: '2023-06-14', details: '"SEO tips" now at position 3' },
    { action: 'Page optimized', date: '2023-06-13', details: 'Home page meta description updated' },
    { action: 'New content published', date: '2023-06-12', details: '"10 SEO Strategies for 2023" blog post' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize any necessary data
  }

  runSeoAudit(): void {
    // Implement SEO audit functionality
    console.log('Running SEO audit...');
  }

  generateReport(): void {
    // Implement report generation functionality
    console.log('Generating report...');
  }
}