package com.doodle.backend.domain;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="message")
public class ChatMessage {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="body")
    private String body;

    @Column(name="sent_at")
    private Date sentAt;

    @Column(name="sender_username")
    private String senderUsername;


    public ChatMessage() {
    }

    public ChatMessage(int id, String body, Date sentAt, String senderUsername) {
        this.id = id;
        this.body = body;
        this.sentAt = sentAt;
        this.senderUsername = senderUsername;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Date getSentAt() {
        return sentAt;
    }

    public void setSentAt(Date sentAt) {
        this.sentAt = sentAt;
    }

    public String getSenderUsername() {
        return senderUsername;
    }

    public void setSenderUsername(String senderUsername) {
        this.senderUsername = senderUsername;
    }
}
