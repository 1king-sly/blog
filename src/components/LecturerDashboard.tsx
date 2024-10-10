import React from 'react';
import { MissingMarkReport } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface LecturerDashboardProps {
  reports: MissingMarkReport[];
  onUpdateStatus: (reportId: string, status: 'in-progress' | 'resolved') => void;
}

const LecturerDashboard: React.FC<LecturerDashboardProps> = ({ reports, onUpdateStatus }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Missing Mark Reports</h2>
      <div className="space-y-4">
        {reports.map((report) => (
          <div key={report.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{report.unitName} ({report.unitCode})</h3>
            <p>Student ID: {report.studentId}</p>
            <p>Academic Year: {report.academicYear}</p>
            <p>Status: <span className={`font-semibold ${report.status === 'resolved' ? 'text-green-600' : 'text-yellow-600'}`}>{report.status}</span></p>
            <p>Reported: {report.createdAt.toLocaleDateString()}</p>
            <div className="mt-2 space-x-2">
              {report.status !== 'resolved' && (
                <button
                  onClick={() => onUpdateStatus(report.id, 'in-progress')}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Mark as In Progress
                </button>
              )}
              {report.status !== 'resolved' && (
                <button
                  onClick={() => onUpdateStatus(report.id, 'resolved')}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 flex items-center"
                >
                  <CheckCircle size={18} className="mr-1" />
                  Resolve
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LecturerDashboard;