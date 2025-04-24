import { useEffect, useState } from "react";
import LaligaCau from "../../components/Teams/LaLiga-Cup";
export default function LaligaCauS() {
    const [product, setproduct] = useState([])
    useEffect(() => {
        fetch("https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=179348afd14a963ed80acd9a07dfefb21448058c6e8e8cf220f06a2409d68f28")
            .then(res => res.json())
            .then(json => {
                const conttame = json.map((team, i) => {
                    const MP = 38;
                    const W = Math.floor(Math.random() * (MP + 1));
                    const D = Math.floor(Math.random() * (MP - W + 1));
                    const L = MP - W - D;
                    const Pts = (W * 3) + (D * 1);
                    return {
                        ...team,
                        cont: (i + 1).toString(),
                        MP: MP,
                        W: W,
                        D: D,
                        L: L,
                        Pts: Pts,
                    };
                });
                function sort(teams) {
                    let n = teams.length
                    for (let p = 0; p < n - 1; p++) {
                        for (let r = 0; r < n - p - 1; r++) {
                            if (teams[r].Pts < teams[r + 1].Pts) {
                                let temp = teams[r]
                                teams[r] = teams[r + 1]
                                teams[r + 1] = temp

                            }
                        }
                    }
                    return teams
                }
                const storTeams = sort(conttame)

                const updatedTeams = storTeams.map((team, i) => ({
                    ...team,
                    cont: (i + 1).toString()
                }))

                setproduct(updatedTeams)
            });
    }, []);
    return (
        <>
            <div className="px-2 py-6">

                <div className="flex justify-between">
                    <p>club</p>
                    <div >
                        <ul className="flex gap-7">
                            <li>MP</li>
                            <li>W</li>
                            <li>D</li>
                            <li>L</li>
                            <li>Pts</li>
                        </ul>
                    </div>
                </div>

                {product.map(item => (
                    <div>
                        <LaligaCau
                            key={item.team_key}
                            name={item.team_name}
                            cont={item.cont}
                            Img={item.team_badge}
                            MP={item.MP}
                            W={item.W}
                            D={item.D}
                            L={item.L}
                            Pts={item.Pts}
                        />
                    </div>
                ))}


            </div>
        </>
    )




}


