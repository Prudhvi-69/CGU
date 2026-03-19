package com.jfs.tuber.controller;

import com.jfs.tuber.entity.Players;
import com.jfs.tuber.service.PlayersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/players")
public class PlayersController {

    @Autowired
    PlayersService playersService;

    @PostMapping("/add")  // localhost:8080/players/add
    public void addPlayer(@RequestBody Players player) {
        playersService.addPlayer(player);
    }

    @GetMapping("/show")  // localhost:8080/players/show
    public List<Players> showPlayers() {
        return playersService.getAllPlayers();
    }
}
