package com.doodle.backend.domain;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name="message")
public class Message {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="body")
    private String body;

    @Column(name="sent_at")
    private Instant sentAt;

    @Column(name="sender_username")
    private String senderUsername;


    public Message() {
    }

    public Message(int id, String body, Instant sentAt, String senderUsername) {
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

    public Instant getSentAt() {
        return sentAt;
    }

    public void setSentAt(Instant sentAt) {
        this.sentAt = sentAt;
    }

    public String getSenderUsername() {
        return senderUsername;
    }

    public void setSenderUsername(String senderUsername) {
        this.senderUsername = senderUsername;
    }
}
