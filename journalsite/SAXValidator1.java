declare
    no employee.id%type;
    name employee.name%type;
    salary employee.salary%type;
   cursor c is select id,name,salary from 
  employee where salary >6000;
  begin
  open c;
  loop
  fetch c into no,name,salary;
  if c%notfound then
  dbms_output.put_line('No rows found');
  exit;
  end if;
  dbms_output.put_line('Eno='||no);
  dbms_output.put_line('Ename='||name);
  dbms_output.put_line('Esalary='||salary);
  insert into salary1 values(no,name,salary);
  end loop;
  close c;
  end;
  /
   declare
       no employee.id%type;
        name employee.name%type;
        salary employee.salary%type;
        cursor c is select id,name,salary from employee where salary>6000;
        begin
        open c;
        loop
       fetch c into no,name,salary;
      if c% notfound then
      dbms_output.put_line('no rows found');
      end if;
      exit when c% notfound;
      dbms_output.put_line('Eno='||no);
    dbms_output.put_line('Ename='||name);
      dbms_output.put_line('Esalary='||salary);
      insert into salary1 values(no,name,salary);
      end loop;
     close c;
     end;
   /

