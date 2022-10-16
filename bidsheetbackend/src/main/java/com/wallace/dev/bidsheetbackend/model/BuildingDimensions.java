package com.wallace.dev.bidsheetbackend.model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
public class BuildingDimensions {
    private int length;
    private int width;
    private int height;
    private int overhang;

    @Id
    private int totalSqft;


}
