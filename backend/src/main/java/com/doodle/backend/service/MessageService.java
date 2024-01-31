package com.doodle.backend.service;

import com.doodle.backend.domain.ChatMessage;
import com.doodle.backend.repository.MessageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    private MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public List<ChatMessage> getAllMessages() {
        return messageRepository.findAll();
    }

    public void addMessage(ChatMessage message) {
        messageRepository.save(message);
    }
}
