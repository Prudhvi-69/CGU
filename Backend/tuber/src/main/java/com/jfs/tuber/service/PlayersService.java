package com.jfs.tuber.service;

import com.jfs.tuber.entity.Players;
import com.jfs.tuber.repository.PlayersRep;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayersService {

    private final PlayersRep playersRep;

    PlayersService(PlayersRep playersRep) {
        this.playersRep = playersRep;
    }

    public void addPlayer(Players player) {
        playersRep.save(player);
    }

    public List<Players> getAllPlayers() {
        return playersRep.findAll();
    }
}
