-- `student`
create table if not exists `student`
(
    `id`       integer          not null primary key AUTOINCREMENT,
    `name`     varchar(256)     not null,
    `age`      int              null,
    `class_id`    bigint           not null,
    `score`    double default 0 null,
    `exam_num` int    default 0 null
);

insert into student (name, age, class_id, score, exam_num)
values ('George', 25, 1, 2.5, 1);
insert into student (name, age, class_id, score, exam_num)
values ('Philip', 18, 1, 400, 4);
insert into student (name, age, class_id, score, exam_num)
values ('Harry', 40, 2, 600, 4);
insert into student (name, age, class_id, score, exam_num)
values ('Edward', null, 2, 360, 4);
insert into student (name, age, class_id, score, exam_num)
values ('David', 19, 3, 120, 2);
insert into student (name, age, class_id, score, exam_num)
values ('Larry', 56, 3, 500, 4);
insert into student (name, age, class_id, score, exam_num)
values ('Brian', 24, 4, 390, 3);
insert into student (name, age, class_id, score, exam_num)
values ('Walter', 23, 4, 0, 4);
insert into student (name, age, class_id, score, exam_num)
values ('Joseph', 80, 4, 600, 4);
insert into student (name, age, class_id, score, exam_num)
values ('Samuel', 60, 5, 100.5, 1);

-- `student_new`
create table if not exists `student_new`
(
    `id`       integer          not null primary key AUTOINCREMENT,
    `name`     varchar(256)     not null,
    `age`      int              null,
    `class_id`    bigint           not null,
    `score`    double default 0 null,
    `exam_num` int    default 0 null
);

insert into `student_new` (`name`, `age`, `class_id`, `score`, `exam_num`)
values ('NewStudent1', 20, 1, 120, 1);
insert into `student_new` (`name`, `age`, `class_id`, `score`, `exam_num`)
values ('NewStudent2', 21, 2, 180, 2);
insert into `student_new` (`name`, `age`, `class_id`, `score`, `exam_num`)
values ('John', 25, 1, 2.5, 1);
insert into `student_new` (`name`, `age`, `class_id`, `score`, `exam_num`)
values ('Bob', 18, 1, 400, 4);
