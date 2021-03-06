package qa.seanqagroup.learningApp.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import qa.seanqagroup.learningApp.model.Course;
import qa.seanqagroup.learningApp.model.UserTakesCourse;

@Repository
public interface CourseRepository extends JpaRepository<Course,Long> {
	Page<Course> findByCourseName(List<UserTakesCourse> courseIds, Pageable pageable);
	
	Course getCourseByCourseId(Long courseId);
}
