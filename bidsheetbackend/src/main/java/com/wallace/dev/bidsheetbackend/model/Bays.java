package com.wallace.dev.bidsheetbackend.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
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
    private int totalBays = countLength * 2 + countWidth * 2; // 2 bays = 1 for each side of the building

    public void setCountLength(){
        /** TODO
         * set bays count length = formula from bidsheet relying on
         * the length of the building. need to figure out the best way to pass it over.
         */
    }

    public void setCountWidth(){
        /** TODO
         * set bays count width = formula from bidsheet relying on
         * the width of the building. need to figure out the best way to pass it over.
         */
    }
}
