interface GameRecordProps {
    history: Array<
        | { player: string; opponent: string; result: string } // 1vs1 모드
        | { gameMode: string; team: string[], result: string } // Tournament 모드
    >;
}

const GameRecord: React.FC<GameRecordProps> = ({ history }) => {
    return (
        <div className="w-[80%] max-w-md mx-auto mt-[110px]">
            <div className=" max-h-[220px] overflow-y-auto">
                {history.map((game, index) => (
                    <div
                        key={index}
                        className="bg-gray-300 text-black rounded-md flex justify-between p-3 my-1"
                    >
                        {"player" in game ? (
                            <>
                                <span className="text-xs flex items-center">
                                    {game.player} VS {game.opponent}
                                </span>
                                <span className={game.result === "WIN" ? "text-blue-500" : "text-red-500"}>
                                    {game.result}!
                                </span>
                            </>
                        ) : (
                            <>
                            <span>
                                {game.gameMode}
                            </span>
                            <div className="text-sm">
                                {game.team.map((member, i) => (
                                    <div key={i}>{member}</div>
                                ))}
                            </div>

                            <span className={game.result === "WIN" ? "text-blue-500" : "text-red-500"}>
                                {game.result}!
                            </span>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameRecord;