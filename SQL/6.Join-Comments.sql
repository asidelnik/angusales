-- Customers   Companies
-- employee  job  department


-- company - many Customers
-- customer - many comments


/* Complex Joining 
    select employees.name, date, sum, departments.name, jobs.title from salaries
    inner join employees on salaries.employee_id = employees.employee_id
    inner join jobs on jobs.job_id = employees.job_id
    inner join departments on departments.department_id = employees.department_id
*/