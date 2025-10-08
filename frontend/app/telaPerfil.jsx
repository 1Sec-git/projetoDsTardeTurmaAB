import React from "react";
import { Text, View, ScrollView, TouchableOpacity, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const { width, height } = useWindowDimensions();
  const paddingHorizontal = Math.max(16, width * 0.05);
  const paddingTop = Math.max(40, height * 0.06);

  const genres = ["Rock", "Metal industrial", "Forró", "Glam Rock"];
  const artists = [
    { icon: "🎵", name: "Jackson do Pandeiro" },
    { icon: "🎸", name: "Nirvana" },
    { icon: "🎤", name: "Marilyn Manson" },
  ];

  return (
    <LinearGradient colors={["#8B5CF6", "#EAB308"]} style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* Header com botão voltar */}
        <View
          style={{
            paddingTop,
            paddingHorizontal,
            paddingBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "rgba(255,255,255,0.2)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>←</Text>
          </TouchableOpacity>
        </View>

        {/* Seção do perfil */}
        <View style={{ alignItems: "center", paddingHorizontal }}>
          {/* Foto do perfil */}
          <View
            style={{
              width: width * 0.3,
              height: width * 0.3,
              borderRadius: (width * 0.3) / 2,
              backgroundColor: "#4A5568",
              marginBottom: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>👤</Text>
          </View>

          {/* Nome do usuário (observe o apóstrofo, sem backtick) */}
          <Text
            style={{
              color: "white",
              fontSize: width < 360 ? 20 : 24,
              fontWeight: "bold",
              marginBottom: 8,
            }}
          >
            Fulano D'Town
          </Text>

          {/* Estatísticas */}
          <Text
            style={{
              color: "white",
              fontSize: width < 360 ? 14 : 16,
              marginBottom: 20,
            }}
          >
            23 seguidores • 4 seguindo
          </Text>

          {/* Botão Seguir */}
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(139, 69, 19, 0.8)",
              paddingHorizontal: width < 360 ? 30 : 40,
              paddingVertical: 12,
              borderRadius: 25,
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Seguir +
            </Text>
          </TouchableOpacity>

          {/* Info do usuário */}
          <Text
            style={{
              color: "white",
              fontSize: 14,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            yrCapsaicin 🎵 naousoiphone
          </Text>
        </View>

        {/* Bio */}
        <View
          style={{
            marginHorizontal: paddingHorizontal,
            backgroundColor: "rgba(139, 69, 19, 0.6)",
            borderRadius: 20,
            padding: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              lineHeight: 24,
              textAlign: "justify",
            }}
          >
            eeeer amo ouçar musga{"\n"}amo tumati tamem
          </Text>
        </View>

        {/* Tags de gêneros */}
        <View
          style={{
            paddingHorizontal,
            marginBottom: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {genres.map((genre, i) => (
              <TouchableOpacity
                key={i}
                style={{
                  backgroundColor: "rgba(255, 182, 193, 0.8)",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 20,
                  marginBottom: 10,
                  width: "48%",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  {genre}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Artistas mais ouvidos */}
        <View style={{ paddingHorizontal, paddingBottom: 40 }}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Artistas mais ouvidos
          </Text>

          {artists.map((artist, i) => (
            <TouchableOpacity
              key={i}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "rgba(255, 182, 193, 0.6)",
                borderRadius: 15,
                padding: 15,
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#4A5568",
                  marginRight: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>{artist.icon}</Text>
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                {artist.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
