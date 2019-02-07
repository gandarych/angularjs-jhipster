package eu.microwebservices.awesomejhipster.repository;

import eu.microwebservices.awesomejhipster.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
