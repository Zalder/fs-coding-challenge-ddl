package com.doodle.backend.web.controller;

import com.doodle.backend.domain.Message;
import com.doodle.backend.service.MessageService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
public class ChatRestController {

    private MessageService messageService;

    public ChatRestController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping("/messages")
    List<Message> getAllMessages() {
        return messageService.getAllMessages();
    }
}
