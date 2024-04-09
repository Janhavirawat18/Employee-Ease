function togglePersonalDetailsTable() {
    const tableContainer = document.querySelector('.personal-details-container');
    const toggleButton = document.getElementById('toggle-table-btn');
    if (tableContainer.style.display === 'none') {
        tableContainer.style.display = 'block';
        toggleButton.textContent = 'Hide Personal Details Table';
        showPersonalDetailsTable();
    } else {
        tableContainer.style.display = 'none';
        toggleButton.textContent = 'Show Personal Details Table';
    }
}

function showPersonalDetailsTable() {
    const personalDetailsContainer = document.querySelector('.personal-details-container');
    personalDetailsContainer.style.display = 'block';
    const tableBody = document.querySelector('#personal-details-table tbody');
    const personalDetails = [
        { no: 1, name: 'Alice Johnson', workType: 'Full-time', workHours: 8, month: 'January' },
        { no: 2, name: 'Bob Smith', workType: 'Part-time', workHours: 8, month: 'January' },
        { no: 3, name: 'Charlie Brown', workType: 'Contract', workHours: 8, month: 'January' },
        { no: 4, name: 'David Lee', workType: 'Full-time', workHours: 8, month: 'January' },
        { no: 5, name: 'Emma Davis', workType: 'Part-time', workHours: 8, month: 'January' },
        { no: 6, name: 'Frank Wilson', workType: 'Contract', workHours: 8, month: 'January' },
        { no: 7, name: 'Grace Thompson', workType: 'Full-time', workHours: 8, month: 'January' },
        { no: 8, name: 'Henry Martinez', workType: 'Part-time', workHours: 8, month: 'January' },
        { no: 9, name: 'Ivy Garcia', workType: 'Contract', workHours: 8, month: 'January' },
        { no: 10, name: 'Jack Robinson', workType: 'Full-time', workHours: 8, month: 'January' },
        { no: 11, name: 'Kate Adams', workType: 'Part-time', workHours: 8, month: 'January' },
        { no: 12, name: 'Leo Harris', workType: 'Contract', workHours: 8, month: 'January' }
    ];    
    tableBody.innerHTML = '';
    personalDetails.forEach(function(detail) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${detail.no}</td>
            <td>${detail.name}</td>
            <td>${detail.workType}</td>
            <td>${detail.workHours}</td>
            <td>${detail.month}</td>
        `;
        tableBody.appendChild(row);
    });
}
document.addEventListener('DOMContentLoaded', showPersonalDetailsTable);


function toggleDailyProgressTable() {
    const tableContainer = document.querySelector('.daily-progress-container');
    const toggleButton = document.getElementById('toggle-progress-btn');

    if (tableContainer.style.display === 'none') {
        tableContainer.style.display = 'block';
        toggleButton.textContent = 'Hide Daily Progress Table';
        showDailyProgressTable();
    } else {
        tableContainer.style.display = 'none';
        toggleButton.textContent = 'Show Daily Progress Table';
    }
}

function showDailyProgressTable() {
    const tableBody = document.querySelector('#daily-progress-table tbody');

    const dailyProgress = [
        { serialNumber: 1, project: 'Project A', hours: 4, date: '2024-04-15' },
        { serialNumber: 2, project: 'Project B', hours: 3, date: '2024-04-15' },
        { serialNumber: 3, project: 'Project C', hours: 5, date: '2024-04-16' },
        { serialNumber: 4, project: 'Project D', hours: 6, date: '2024-04-16' },
        { serialNumber: 5, project: 'Project E', hours: 4, date: '2024-04-17' },
        { serialNumber: 6, project: 'Project F', hours: 3, date: '2024-04-17' }
    ];    

    tableBody.innerHTML = '';

    dailyProgress.forEach(function(progress) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${progress.serialNumber}</td>
            <td>${progress.project}</td>
            <td>${progress.hours}</td>
            <td>${progress.date}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', showDailyProgressTable);
