package com.wallace.dev.bidsheetbackend.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.info.ProjectInfoProperties;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@RequiredArgsConstructor
@Entity
public class Bays {
    private int countLength;
    private int countWidth;
    @Id
    private int totalBays;
}
