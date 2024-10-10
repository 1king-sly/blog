import React, { useState } from 'react';
import { MissingMarkReport, User } from '../types';
import { PlusCircle, RefreshCw } from 'lucide-react';

interface StudentDashboardProps {
  user: User;
  reports: MissingMarkReport[];
  onCreateReport: (report: Omit<MissingMarkReport, 'id' | 'createdAt' | 'updatedAt' | 'status'>) => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ user, reports, onCreateReport }) => {
  const [newReport, setNewReport] = useState({
    unitCode: '',
    unitName: '',
    academicYear: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateReport({
      ...newReport,
      studentId: user.id,
    });
    setNewReport({ unitCode: '', unitName: '', academicYear: '' });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Report Missing Mark</h2>
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Unit Code"
          value={newReport.unitCode}
          onChange={(e) => setNewReport({ ...newReport, unitCode: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Unit Name"
          value={newReport.unitName}
          onChange={(e) => setNewReport({ ...newReport, unitName: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Academic Year"
          value={newReport.academicYear}
          onChange={(e) => setNewReport({ ...newReport, academicYear: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
          <PlusCircle size={18} className="mr-2" />
          Submit Report
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Your Reports</h2>
      <div className="space-y-4">
        {reports.map((report) => (
          <div key={report.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{report.unitName} ({report.unitCode})</h3>
            <p>Academic Year: {report.academicYear}</p>
            <p>Status: <span className={`font-semibold ${report.status === 'resolved' ? 'text-green-600' : 'text-yellow-600'}`}>{report.status}</span></p>
            <p>Last Updated: {report.updatedAt.toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;