package com.wallace.dev.bidsheetbackend.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Container and table for 6x6x__ posts and 2x_ boards.
 */
@Getter
@Setter
@RequiredArgsConstructor
@Entity
public class Posts {

    @Id
    private String size;
    private int quantity;
    private float unitPrice;
    private float totalCost;

}
