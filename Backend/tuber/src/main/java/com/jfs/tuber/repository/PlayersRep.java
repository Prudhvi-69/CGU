package com.jfs.tuber.repository;

import com.jfs.tuber.entity.Players;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayersRep extends JpaRepository<Players, Integer> {
}
