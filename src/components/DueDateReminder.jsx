import React from 'react';

const DueDateReminder = () => {
  // Get current date/time in IST
  const now = new Date();
  const nowIST = new Date(
    now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
  );

  const year = nowIST.getFullYear();
  const monthIndex = nowIST.getMonth(); // 0-11
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthName = monthNames[monthIndex];

  // Helper to create an IST date for this month
  const createISTDate = (day) => {
    const d = new Date(Date.UTC(year, monthIndex, day, 0, 0, 0));
    // Format in IST explicitly
    const ist = new Date(d.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    return ist;
  };

  const formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mon = monthNames[date.getMonth()];
    const yyyy = date.getFullYear();
    return `${dd} ${mon} ${yyyy}`;
  };

  const dueConfig = [
    { day: 7, task: 'GST Return (GSTR-3B)', type: 'GST' },
    { day: 11, task: 'TDS Return (24Q)', type: 'TDS' },
    { day: 15, task: 'Advance Tax Payment', type: 'Income Tax' },
    { day: 20, task: 'GST Return (GSTR-1)', type: 'GST' },
    { day: 30, task: 'PF & ESI Returns', type: 'Labor Law' },
    { day: 30, task: 'TDS Return (26Q)', type: 'TDS' }
  ];

  const MS_IN_DAY = 24 * 60 * 60 * 1000;
  const dueDates = dueConfig.map((c) => {
    const date = createISTDate(c.day);
    const diffDays = Math.ceil((date - nowIST) / MS_IN_DAY);
    const urgent = diffDays >= 0 && diffDays <= 14; // within next 14 days
    return {
      date: formatDate(date),
      task: c.task,
      type: c.type,
      urgent
    };
  });

  return (
    <section id="due-dates" className="bg-gradient-to-r from-red-50 to-orange-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Important Due Dates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay compliant with our comprehensive due date tracker. Never miss
            an important filing deadline again.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary text-black px-6 py-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold">{`${monthName} ${year}`} - Upcoming Deadlines</h3>
            <span className="text-sm font-medium bg-white text-primary px-3 py-1 rounded-full">
              Within next 14 days
            </span>
          </div>

          <div className="divide-y divide-gray-200">
            {dueDates.map((item, index) => (
              <div key={index} className={`px-6 py-4 flex items-center justify-between hover:bg-gray-50 ${item.urgent ? 'bg-red-50 border-l-4 border-red-500' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${item.urgent ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                    {item.urgent ? 'Urgent' : 'Upcoming'}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.task}</div>
                    <div className="text-sm text-gray-600">{item.type}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{item.date}</div>
                  <div className="text-sm text-gray-600">Due Date</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 px-6 py-4 text-center">
            <a href="#contact" className="btn-primary">
              Get Personalized Reminder Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DueDateReminder;
