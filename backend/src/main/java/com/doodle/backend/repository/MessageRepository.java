package com.doodle.backend.repository;

import com.doodle.backend.domain.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<ChatMessage, Integer> {
}
