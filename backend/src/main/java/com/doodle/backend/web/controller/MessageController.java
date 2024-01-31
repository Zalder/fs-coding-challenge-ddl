package com.doodle.backend.web.controller;

import com.doodle.backend.domain.ChatMessage;
import com.doodle.backend.repository.MessageRepository;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import java.util.Date;

@Controller
public class MessageController {

    private MessageRepository messageRepository;

    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @MessageMapping("/sendMessage")
    @SendTo("/topic/newMessage")
    public ChatMessage sendMessage(ChatMessage message) {
        message.setSentAt(new Date());

        return messageRepository.save(message);
    }
}
